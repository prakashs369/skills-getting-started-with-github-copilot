import builtins

from skills_getting_started_with_github_copilot.calculator import main

def test_main_output(capsys, monkeypatch):
    # Patch print to ensure output is captured
    main()
    captured = capsys.readouterr()
    output = captured.out

    assert "Calculator Tests:" in output
    assert "10 + 5 = 15" in output
    assert "10 - 5 = 5" in output
    assert "10 * 5 = 50" in output
    assert "10 / 5 = 2.0" in output
    assert "10 ^ 2 = 100" in output
    assert "Square root of 25 = 5.0" in output
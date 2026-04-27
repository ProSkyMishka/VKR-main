import SwiftUI

struct ContentView: View {
    @State private var x = false
    @State private var y = false

    var body: some View {
        VStack {
            Toggle("tts002-x", isOn: $x)
            Toggle("tts002-y", isOn: $y)
            Text("tts002-state: \(x ? 1 : 0)/\(y ? 1 : 0)")
        }
        .padding()
    }
}

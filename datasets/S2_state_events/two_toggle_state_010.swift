import SwiftUI

struct ContentView: View {
    @State private var x = false
    @State private var y = false

    var body: some View {
        VStack {
            Toggle("tts010-x", isOn: $x)
            Toggle("tts010-y", isOn: $y)
            Text("tts010-state: \(x ? 1 : 0)/\(y ? 1 : 0)")
        }
        .padding()
    }
}

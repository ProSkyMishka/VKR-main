import SwiftUI

struct ContentView: View {
    @State private var x = false
    @State private var y = false

    var body: some View {
        VStack {
            Toggle("tts003-x", isOn: $x)
            Toggle("tts003-y", isOn: $y)
            Text("tts003-state: \(x ? 1 : 0)/\(y ? 1 : 0)")
        }
        .padding()
    }
}

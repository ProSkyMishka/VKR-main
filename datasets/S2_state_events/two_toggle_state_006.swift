import SwiftUI

struct ContentView: View {
    @State private var x = false
    @State private var y = false

    var body: some View {
        VStack {
            Toggle("tts006-x", isOn: $x)
            Toggle("tts006-y", isOn: $y)
            Text("tts006-state: \(x ? 1 : 0)/\(y ? 1 : 0)")
        }
        .padding()
    }
}

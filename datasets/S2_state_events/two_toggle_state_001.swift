import SwiftUI

struct ContentView: View {
    @State private var x = false
    @State private var y = false

    var body: some View {
        VStack {
            Toggle("tts001-x", isOn: $x)
            Toggle("tts001-y", isOn: $y)
            Text("tts001-state: \(x ? 1 : 0)/\(y ? 1 : 0)")
        }
        .padding()
    }
}

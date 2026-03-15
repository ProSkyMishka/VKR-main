import SwiftUI

struct ContentView: View {
    @State private var isOn = false

    var body: some View {
        VStack {
            Toggle("Enable", isOn: $isOn)
                .padding()
            Text(isOn ? "On" : "Off")
        }
    }
}

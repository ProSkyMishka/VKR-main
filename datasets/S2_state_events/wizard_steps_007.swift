import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz007-step: \(step)").font(.headline)
            if step == 1 { Text("wz007-intro") }
            if step == 2 { Text("wz007-second") }
            if step == 3 { Text("wz007-finish") }
            HStack {
                Button("wz007-back") { if step > 1 { step -= 1 } }
                Button("wz007-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}

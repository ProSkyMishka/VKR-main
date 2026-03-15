import SwiftUI
struct ContentView: View {
    @State private var step = 0
    var body: some View {
        HStack {
            Button("−") { step -= 1 }
            Text("\(step)")
            Button("+") { step += 1 }
        }.padding()
    }
}

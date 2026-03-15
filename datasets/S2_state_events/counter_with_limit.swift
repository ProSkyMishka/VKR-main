import SwiftUI
struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("\(n)")
            Button("+1") {
                if n < 10 { n += 1 }
            }
        }
    }
}

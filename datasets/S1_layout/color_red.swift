import SwiftUI
struct ContentView: View {
    var body: some View {
        ZStack {
            Color.red.ignoresSafeArea()
            Text("Red").foregroundColor(.white)
        }
    }
}

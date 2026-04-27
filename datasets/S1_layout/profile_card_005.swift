import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc005-name")
                    .font(.title2)
                    .bold()
                Text("pc005-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc005-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc005-posts"); Text("\(15)").bold() }
                VStack { Text("pc005-followers"); Text("\(105)").bold() }
                VStack { Text("pc005-likes"); Text("\(1005)").bold() }
            }
        }
        .padding()
    }
}
